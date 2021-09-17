let videos = [
  {
    title: "First video",
    comments: 2,
    views : 50,
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
export const see = (req, res) =>{
  const {id} = req.params;
  const video = videos[id - 1];
  return res.render("watch", {pageTitle: `Watching ${video.title}`});
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
//export 로 수출 