import StoryCard from "./StoryCard";
const stories = [

    {
        name:"Tharun Kumaar",
        src: "https://links.papreact.com/zof",
        profile: "https://links.papreact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papreact.com/4zn",
        profile: "https://links.papreact.com/kxk",
    },
    {
        name:"Jeff Bezos",
        src: "https://links.papreact.com/k2j",
        profile: "https://links.papreact.com/f0p",
    },
    {
        name:"Mark Zuckerburg",
        src: "https://links.papreact.com/xql",
        profile: "https://links.papreact.com/snf",
    },
    {
        name:"Bill Gates",
        src: "https://links.papreact.com/4u4",
        profile: "https://links.papreact.com/zvy",
    },
];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard name={story.name} src={story.src} profile={story.profile} />
            ))}
            
        </div>
    )
}

export default Stories
