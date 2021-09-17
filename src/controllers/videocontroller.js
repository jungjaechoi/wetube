export const see = (req,res) => res.render("watch");

export const trending = (req,res) => res.render("home", { pageTitle: "Home" }); // pageTitle 변수 넘겨줌
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send('Search');
export const upload = (req,res) => res.send('Upload');
export const deleteVideo = (req,res) => res.send('Delete video');

//export 로 수출