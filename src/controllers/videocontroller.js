import Video, {formatHashtags} from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos }); 
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(video === null){ //video에 null값이 들어올 경우 대비
    return res.render("404", {pageTitle:"Video not found"});
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(video === null){ //video에 null값이 들어올 경우 대비
    return res.render("404", {pageTitle:"Video not found"});
  }
  return res.render("edit", { pageTitle: `Edit ${video.title}`,video });
};

export const postEdit = async(req, res) => {
  const { id } = req.params;
  const {title, description, hashtags} = req.body;
  const video = await Video.exists({_id: id}); //video object 전체를 가져오지 않고 있는지 없는지만 T/F로 반환
  if(!video){ //위에랑 다른 표기법
    return res.render("404", {pageTitle:"Video not found"});
  }
  await Video.findByIdAndUpdate(id,{
    title,
    description,
    hashtags: formatHashtags(hashtags)

  });
  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags;
  // await video.save();
  // 이렇게 일일히 바꿔줄 수도 있다.
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try{
    const video = new Video({
      title,
      description,
      hashtags: formatHashtags(hashtags)
    });
    await video.save(); // video.save()로 db에 저장
    return res.redirect("/"); // root로 연결
  } catch(error){
    return res.render("upload", 
      { pageTitle: "Upload Video",
      errorMessage: error._message, 
    });
  }
}; 
// try, catch    async,await => await을 할 경우 callback을 쓰지 않고 바로 기다려야 함을 알려줄 수 있다.     
// const {id} = req.params; 로 url로부터 id 가져오고, req.body로 form의 입력값을 가져옴

export const deleteVideo = async (req,res) => {
  const {id} = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
}

export const search = async (req,res) => {
  const { keyword } = req.query;
  if(keyword){
    const videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}`, "i")
      }
    });
    return res.render("search", {pageTitle:"Search", videos});
  }
  return res.render("search", {pageTitle: "Search"});
}
// MongoDB 툴을 사용하여 view수가 10이상의 영상 같은 것도 search할 수 있다.