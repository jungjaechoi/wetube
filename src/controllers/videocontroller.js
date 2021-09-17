let videos = [
  {
    title: "First video",
    comments: 2,
    views : 1,
    id: 1
  },
  {
    title: "Second video",
    comments: 12,
    views : 106,
    id: 2
  }, {
    title: "Third video",
    comments: 5,
    views : 62,
    id: 3
  }
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) =>{
  const {id} = req.params; // ES6 문법 const id = req.rarams.id와 동일
  const video = videos[id - 1];
  return res.render("watch", {pageTitle: `Watching: ${video.title}`, video});
};
export const getEdit = (req, res) => {
  const {id} = req.params; 
  const video = videos[id - 1];
  return res.render("edit", {pageTitle: `Editing: ${video.title}`, video});
};
export const postEdit = (req, res) => {
  const {id} = req.params; // url로부터 params해서 id 가져오고
  const { title } = req.body; // body로 입력값 받아옴
  videos[id - 1].title = req.body.title;
  return res.redirect(`/videos/${id}`);
};
//export 로 수출 
//videos[id-1]에 넘길 때 req.body로 넘기면 안되고 title로 넘겨야함
// => req.body는 배열이므로 req.body.title이 맞는거였음

export const getUpload = (req,res) => {
    return res.render("upload", {pageTitle: `Upload Video`});
};

export const postUpload = (req,res) => {
    const newVideo = {
        title: req.body.title,
        comments: 0,
        views: 0,
        id: videos.length + 1
    };
    videos.push(newVideo);
    return res.redirect("/");
};