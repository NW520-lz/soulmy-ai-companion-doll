import { Heart, Volume2, MessageSquare, X, Check } from "lucide-react"

export default function WhyChooseUsSection() {
  const advantages = [
    {
      icon: Heart,
      title: "情感连接，不止于闲聊",
      description:
        "竞品只会通用对话，我们能聊'粮票'和'二八自行车'。因为我们内置了时代记忆库，是真正懂那个年代的老伙计。",
      competitor: "通用AI对话",
      ourSolution: "时代记忆库",
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: Volume2,
      title: "互动设计，无需学习",
      description: "摒弃复杂按钮和指令。爸妈只需随口一叫，陪伴就在身边。我们优先考虑易用性，让科技没有门槛。",
      competitor: "复杂操作界面",
      ourSolution: "语音唤醒",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: MessageSquare,
      title: "代际关怀，不添负担",
      description: "我们不强制视频通话，只用一条短信悄悄'报平安'，让您的关心轻松落地，不成为子女的心理负担。",
      competitor: "频繁打扰提醒",
      ourSolution: "温柔关怀",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            市面上的陪伴产品很多，
            <br />
            但我们是
            <span className="text-orange-600">"真懂"</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            不是所有的AI陪伴都一样，真正的陪伴需要理解、需要共鸣、需要温度
          </p>
        </div>

        {/* 优势对比展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div
                key={index}
                className={`relative group ${advantage.bgColor} rounded-3xl p-8 border-2 ${advantage.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                {/* 图标 */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>

                {/* 对比展示 */}
                <div className="space-y-3 mb-6">
                  {/* 竞品方案 */}
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">其他产品：{advantage.competitor}</span>
                  </div>

                  {/* 我们的方案 */}
                  <div
                    className={`flex items-center gap-3 p-3 bg-gradient-to-r ${advantage.color} bg-opacity-10 rounded-lg`}
                  >
                    <div
                      className={`w-6 h-6 bg-gradient-to-r ${advantage.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">SoulMy：{advantage.ourSolution}</span>
                  </div>
                </div>

                {/* 详细描述 */}
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>

                {/* 装饰元素 */}
                <div
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${advantage.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
              </div>
            )
          })}
        </div>

        {/* 核心差异化总结 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              我们的核心差异：
              <span className="text-orange-600">真懂 × 易用 × 贴心</span>
            </h3>
            <p className="text-gray-600 text-lg">三大维度全面超越，只为给长辈最好的陪伴体验</p>
          </div>

          {/* 对比表格 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">对比维度</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-500">普通AI产品</th>
                  <th className="text-center py-4 px-4 font-bold text-orange-600">SoulMy AI陪伴</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-800">对话内容</td>
                  <td className="py-4 px-4 text-center text-gray-500">通用话题</td>
                  <td className="py-4 px-4 text-center text-orange-600 font-medium">时代记忆专属</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-800">操作方式</td>
                  <td className="py-4 px-4 text-center text-gray-500">按钮指令</td>
                  <td className="py-4 px-4 text-center text-orange-600 font-medium">语音唤醒</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-800">家庭关怀</td>
                  <td className="py-4 px-4 text-center text-gray-500">频繁提醒</td>
                  <td className="py-4 px-4 text-center text-orange-600 font-medium">温柔报平安</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-800">情感连接</td>
                  <td className="py-4 px-4 text-center text-gray-500">表面交流</td>
                  <td className="py-4 px-4 text-center text-orange-600 font-medium">深度共鸣</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 底部信任建立 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3年</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">专注研发</p>
              <p className="text-sm text-gray-600">深耕老年陪伴领域</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">50万+</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">时代记忆</p>
              <p className="text-sm text-gray-600">覆盖50-70年代生活</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">98%</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">满意度</p>
              <p className="text-sm text-gray-600">用户真实反馈</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
