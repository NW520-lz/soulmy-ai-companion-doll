import Image from "next/image"
import { MapPin, GraduationCap, Heart, Code, Palette, Users } from "lucide-react"

export default function AboutUsSection() {
  const teamMembers = [
    {
      name: "李泽",
      role: "创始人 & CEO",
      university: "电子科技大学",
      major: "人工智能",
      description: "专注AI算法研发，让技术有温度",
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "陈诺",
      role: "技术总监",
      university: "成都大学",
      major: "嵌入式系统",
      description: "硬件与软件的完美融合者",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      name: "汪雨晗",
      role: "产品设计师",
      university: "成都大学",
      major: "交互设计",
      description: "用设计传递情感与温暖",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "张明轩",
      role: "运营总监",
      university: "电子科技大学",
      major: "市场营销",
      description: "连接产品与用户的桥梁",
      icon: Users,
      color: "from-rose-500 to-rose-600",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            一群懂
            <span className="text-orange-600">"牵挂"</span>
            的年轻人
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* 左侧文字内容 */}
          <div className="space-y-8">
            {/* 使命宣言 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">我们的使命</h3>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                我们或许未曾亲历父辈的峥嵘岁月，但我们都懂那份对家人的牵挂。
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                SoulMy的诞生，就是为了用有温度的科技，让AI成为
                <span className="text-orange-600 font-medium">时光的保鲜盒</span>， 让陪伴可感，让思念可触。
              </p>
            </div>

            {/* 团队介绍 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">专业团队</h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                我们是来自
                <span className="text-blue-600 font-medium">成都大学</span>、
                <span className="text-blue-600 font-medium">电子科技大学</span>
                的工程师、设计师和运营者。
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                从AI算法到嵌入式硬件，我们用专业，为这份情感事业保驾护航。
              </p>
            </div>

            {/* 公司信息 */}
            <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-800">成都 · 中国</span>
              </div>
              <p className="text-gray-600">扎根天府之国，用川人的温情与智慧，为全国的长辈们带去陪伴与关怀。</p>
            </div>

            {/* 核心价值观 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <p className="font-medium text-gray-800 mb-1">有温度</p>
                <p className="text-sm text-gray-600">技术服务情感</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <p className="font-medium text-gray-800 mb-1">有实力</p>
                <p className="text-sm text-gray-600">专业技术团队</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <p className="font-medium text-gray-800 mb-1">有责任</p>
                <p className="text-sm text-gray-600">用心做产品</p>
              </div>
            </div>
          </div>

          {/* 右侧团队展示 */}
          <div className="space-y-8">
            {/* 团队合照 */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=SoulMy团队工作场景"
                  alt="SoulMy团队工作场景"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />

                {/* 团队标语覆盖 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-gray-800 font-medium text-center">"让每一位长辈都能感受到陪伴的温暖"</p>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
            </div>

            {/* 核心团队成员 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">核心团队成员</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => {
                  const IconComponent = member.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* 成员头像区域 */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                            <Image
                              src={`/placeholder.svg?height=64&width=64&text=${member.name}`}
                              alt={member.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div
                            className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center`}
                          >
                            <IconComponent className="w-3 h-3 text-white" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>

                      {/* 教育背景 */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <GraduationCap className="w-4 h-4" />
                          <span>{member.university}</span>
                        </div>
                        <p className="text-xs text-gray-500 ml-6">{member.major}</p>
                      </div>

                      {/* 个人描述 */}
                      <p className="text-sm text-gray-600 italic">{member.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 底部联系信息 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">与我们一起，让科技有温度</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              如果您也认同我们的理念，欢迎加入我们的大家庭。
              <br />
              让我们一起用技术的力量，为更多家庭带去温暖的陪伴。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>成都市高新区天府大道</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-gray-600">
                <span>邮箱：hello@soulmy.ai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
