import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Users, Heart } from "lucide-react"

export default function IPShowcaseSection() {
  const characters = [
    {
      id: "xiaojun",
      name: "知青晓军",
      tagline: "激情燃烧的岁月",
      visual: "穿绿军装，戴红星帽",
      description: "激情燃烧的岁月，上山下乡的故事，他都记得。适合怀念集体生活、有知青经历的长辈。",
      personality: ["热血青春", "集体记忆", "理想主义"],
      suitableFor: "知青一代",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Star,
    },
    {
      id: "wangshifu",
      name: "工人王师傅",
      tagline: "铁肩担道义",
      visual: "穿蓝色工装，手持搪瓷碗",
      description: "从工厂的汽笛声到邻里大院的欢笑，他是一代人的缩影。适合曾是产业工人的长辈。",
      personality: ["踏实可靠", "邻里情深", "工匠精神"],
      suitableFor: "产业工人",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Users,
    },
    {
      id: "lidajie",
      name: "公社李大姐",
      tagline: "热心肠的好邻居",
      visual: "穿布拉吉连衣裙，热情开朗",
      description: "从田间地头到妇女联合会，她见证了时代变迁。适合经历过集体化时代、热爱社区生活的长辈。",
      personality: ["热情开朗", "乐于助人", "生活智慧"],
      suitableFor: "社区活跃者",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      icon: Heart,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            三位特别的伙伴，
            <br />
            总有一位是爸妈的
            <span className="text-orange-600">青春回忆</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            每个时代都有属于那个年代的记忆与情怀，选择最懂爸妈的那一位
          </p>
        </div>

        {/* IP形象展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {characters.map((character, index) => {
            const IconComponent = character.icon
            return (
              <div
                key={character.id}
                className={`relative group ${character.bgColor} rounded-3xl p-8 border-2 ${character.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
              >
                {/* 人气标识 */}
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      🔥 最受欢迎
                    </div>
                  </div>
                )}

                {/* 角色形象 */}
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden bg-white shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=250&text=${character.visual}`}
                      alt={`${character.name}的形象`}
                      width={250}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* 角色图标 */}
                  <div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${character.color} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* 角色信息 */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{character.name}</h3>
                    <p className="text-sm font-medium text-gray-600 mb-4">{character.tagline}</p>
                  </div>

                  {/* 性格特点 */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {character.personality.map((trait, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">{character.description}</p>

                  {/* 适合人群 */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
                    <p className="text-sm text-gray-500 mb-1">特别适合</p>
                    <p className="font-medium text-gray-800">{character.suitableFor}</p>
                  </div>

                  {/* 选择按钮 */}
                  <Button
                    className={`w-full bg-gradient-to-r ${character.color} hover:opacity-90 text-white font-medium py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg`}
                  >
                    选择{character.name}
                  </Button>
                </div>

                {/* 装饰元素 */}
                <div
                  className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${character.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            )
          })}
        </div>

        {/* 底部说明 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <div className="bg-orange-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">不只是外表，更是内在的共鸣</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              每位AI伙伴都拥有独特的性格特征和时代记忆，能够与不同背景的长辈产生深度共鸣。
              <br />
              他们不仅外形贴近那个年代，更重要的是能够理解和分享那个时代的情感与价值观。
            </p>

            {/* 功能亮点 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">🎭</span>
                </div>
                <p className="text-sm font-medium text-gray-800 mb-1">性格定制</p>
                <p className="text-xs text-gray-600">根据时代特色塑造独特性格</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">💭</span>
                </div>
                <p className="text-sm font-medium text-gray-800 mb-1">记忆共享</p>
                <p className="text-xs text-gray-600">拥有丰富的时代记忆库</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">🤝</span>
                </div>
                <p className="text-sm font-medium text-gray-800 mb-1">情感共鸣</p>
                <p className="text-xs text-gray-600">理解那个年代的价值观</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
