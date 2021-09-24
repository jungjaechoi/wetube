import Video from "../models/Video";

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
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
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
      hashtags: hashtags.split(",").map((word)=> `#${word}`),
    });
    await video.save(); // video.save()로 db에 저장
    return res.redirect("/"); // root로 연결
  } catch(error){
    return res.render("upload", 
      { pageTitle: "Upload Video",
      errorMessage: error._message, 
    });
  }
}; // try, catch    async,await => await을 할 경우 callback을 쓰지 않고 바로 기다려야 함을 알려줄 수 있다.     
// const {id} = req.params; 로 url로부터 id 가져오고, req.body로 form의 입력값을 가져옴