import CardLayout from "../../Common/CardLayout"

const SkillCard = ({ title, skills }) => {
    return (
        <CardLayout>
             <div className="h-full space-y-4 p-8 card_stylings">
                {/* Title */}
                <div className="text-lg font-semibold text-Snow dark:text-white text-center">
                    {title.replace(/([A-Z])/g, ' $1').trim()}
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                           className="bg-[#65DA65] text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-400 transition-all dark:bg-[#1AB954] dark:text-gray-900 dark:font-medium dark:hover:bg-green-700"
                        >
                            {skill.title}
                        </div>
                    ))}
                </div>
            </div>
        </CardLayout>
    )
}

export default SkillCard