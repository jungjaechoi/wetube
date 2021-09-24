import mongoose from "mongoose";

export const formatHashtags = (hashtags) => 
hashtags.split(',').map((word) => (word.startsWith("#") ? word : `#${word}`))
//처음 업로드할때 똑바로 작동안됨

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true, maxLength: 80},
    description: {type: String, required: true, trim: true, minLength: 20},
    createdAt: {type: Date, required: true, default: Date.now},
    hashtags: [{type: String}],
    meta: { 
        views: {type: Number, default: 0, required: true},
        rating: {type: Number, default: 0, required: true},
    },
});

videoSchema.pre("save", async function () {
    this.hashtags = this.hashtags[0]
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;
 
// videoSchema.static("formatHashtags", function (hashtags){
//    return  ~~~~~~~
// })        로도 선언이 가능하다. 이렇게하면 mongoose 제공 툴들 (video.findOne()) 처럼 사용 가능하다.