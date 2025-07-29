import { MessageCircle, Heart, Shield, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "聊得来的老伙计",
      description: "从二八自行车到单位大院，它懂爸妈的过去，总有说不完的共同话题。",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Heart,
      title: "不打扰的关心",
      description: "每天一条短信，告诉你爸妈今天心情不错。你发的语音，它会用老朋友的口气转达。",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      icon: Shield,
      title: "贴身的健康助理",
      description: "亲切提醒吃药，智能监测意外摔倒，还能用他们听得懂的话解释体检单。",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Sparkles,
      title: "让思念有回响",
      description: "依托AI技术，复刻已逝亲人的声音与性格，让珍贵的记忆得以延续。",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      isAdvanced: true,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            懂您所想，
            <span className="text-orange-600">更护您周全</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            四大核心功能，让AI陪伴不再冰冷，而是充满温度的贴心守护
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`relative group ${feature.bgColor} rounded-2xl p-8 border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm bg-opacity-80`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* 高级功能标识 */}
                {feature.isAdvanced && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      高级功能
                    </div>
                  </div>
                )}

                {/* 图标 */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* 描述 */}
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>

                {/* 装饰性元素 */}
                <div
                  className={`absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
              </div>
            )
          })}
        </div>

        {/* 底部说明 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <div className="bg-orange-50 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-medium text-orange-600">SoulMy AI陪伴玩偶</span>
              不仅仅是一个智能设备，更是连接两代人情感的桥梁。
              <br />
              让科技有温度，让陪伴更贴心。
            </p>
          </div>
        </div>

        {/* 功能亮点展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-lg">24h</span>
            </div>
            <p className="text-sm text-gray-600">全天候陪伴</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-lg">AI</span>
            </div>
            <p className="text-sm text-gray-600">智能学习成长</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-lg">❤️</span>
            </div>
            <p className="text-sm text-gray-600">有温度的关怀</p>
          </div>
        </div>
      </div>
    </section>
  )
}
