export const see = (req,res) => res.render("watch");

export const trending = (req,res) => res.render("home");
export const edit = (req,res) => res.send('edit');
export const search = (req,res) => res.send('Search');
export const upload = (req,res) => res.send('Upload');
export const deleteVideo = (req,res) => res.send('Delete video');

//export 로 수출