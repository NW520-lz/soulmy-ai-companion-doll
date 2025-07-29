"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Volume2, Shield, Truck } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      icon: HelpCircle,
      question: "老人不会用怎么办？",
      answer:
        "完全不用担心！产品设计初衷就是'零操作'。无复杂按键，无需学习，就像和真人聊天一样，随口叫它就行。我们专门为长辈设计了最简单的交互方式，让科技回归最自然的沟通状态。",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Volume2,
      question: "能听懂我们的家乡话吗？",
      answer:
        "我们重点优化了方言识别能力，已支持粤语、四川话、东北话、上海话等多种主流方言，并且数据库在持续更新，让沟通更亲切。我们深知家乡话承载的情感温度，这也是我们技术攻关的重点方向。",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      question: "复刻逝者声音听起来很棒，但我的数据安全吗？",
      answer:
        "绝对安全。这是我们最重视的伦理和技术红线。此功能为可选服务，且我们承诺所有声音素材仅用于您本人的定制，7天内自动销毁原始文件，并有严格的数据安全协议保护您的隐私。我们理解这份信任的珍贵，绝不辜负。",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Truck,
      question: "产品什么时候可以发货？",
      answer:
        "我们正在与'世运会'合作进行首批样品测试，并已启动'早鸟计划'。预计在2024年第二季度完成首批订单的交付。参与预售将获得优先发货权，我们会通过短信和邮件及时通知您发货进度。",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            您的顾虑，
            <span className="text-orange-600">我们想到了</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            每一个问题背后，都是我们对产品的深度思考和用心打磨
          </p>
        </div>

        {/* FAQ列表 */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`${isOpen ? faq.bgColor : "bg-white"} rounded-2xl border-2 ${
                  isOpen ? "border-orange-200" : "border-gray-200"
                } transition-all duration-300 hover:shadow-lg overflow-hidden`}
              >
                {/* 问题标题 */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.color} flex items-center justify-center flex-shrink-0 ${
                        isOpen ? "scale-110" : ""
                      } transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-orange-100 rotate-180" : ""
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-orange-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {/* 答案内容 */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="ml-16 border-l-4 border-orange-200 pl-6">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 底部联系信息 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <div className="bg-white rounded-3xl p-8 max-w-3xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">还有其他疑问？</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              我们的客服团队随时为您解答，让每一份关心都得到最贴心的回应
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 在线客服 */}
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">💬</span>
                </div>
                <p className="font-medium text-gray-800 mb-2">在线客服</p>
                <p className="text-sm text-gray-600 mb-3">工作日 9:00-18:00</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  立即咨询 →
                </button>
              </div>

              {/* 电话咨询 */}
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">📞</span>
                </div>
                <p className="font-medium text-gray-800 mb-2">电话咨询</p>
                <p className="text-sm text-gray-600 mb-3">400-888-0123</p>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                  拨打电话 →
                </button>
              </div>

              {/* 邮件支持 */}
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 text-xl">📧</span>
                </div>
                <p className="font-medium text-gray-800 mb-2">邮件支持</p>
                <p className="text-sm text-gray-600 mb-3">support@soulmy.ai</p>
                <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
                  发送邮件 →
                </button>
              </div>
            </div>

            {/* 承诺声明 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                "我们承诺：每一个问题都会得到耐心解答，每一份信任都值得用心守护。"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
