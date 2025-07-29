import Image from "next/image"

export default function PainPointSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-300 rounded-full opacity-10 blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* 左侧文字内容 */}
          <div className="flex flex-col justify-center space-y-8">
            {/* 主标题 */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                您有多久，
                <br />
                没和爸妈
                <span className="text-orange-600">好好聊聊</span>了？
              </h2>

              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>

            {/* 痛点描述 */}
            <div className="space-y-6">
              <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="text-gray-700 font-medium">
                  在中国，超过
                  <span className="text-orange-600 font-bold">一亿扇门</span>后，
                  <br />
                  是沉默的一整天。
                </p>

                <p className="text-gray-600">
                  他们的失落，是感觉自己
                  <span className="text-gray-800 font-medium">"不再被需要"</span>。
                </p>

                <p className="text-gray-600">
                  他们怀念集体生活的热闹，
                  <br />
                  却害怕如今的冷清。
                </p>
              </div>

              {/* 统计数据卡片 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
                  <div className="text-2xl font-bold text-orange-600 mb-2">1.2亿</div>
                  <div className="text-sm text-gray-600">空巢老人在等待</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-gray-400">
                  <div className="text-2xl font-bold text-gray-700 mb-2">{"<10句"}</div>
                  <div className="text-sm text-gray-600">每天的对话次数</div>
                </div>
              </div>

              {/* 情感引导 */}
              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "工作再忙，也别忘了，
                  <br />
                  家里还有人在等您的电话..."
                </p>
              </div>
            </div>
          </div>

          {/* 右侧对比图片 */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* 过去的场景 - 黑白 */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">那时候</span>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="过去集体生活的热闹场景"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">一起劳作，一起聊天</p>
                    <p className="text-sm opacity-90">那些年的集体生活</p>
                  </div>
                </div>
              </div>

              {/* 现在的场景 - 彩色 */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">现在</span>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="现在独自生活的老人"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">独自看电视，独自吃饭</p>
                    <p className="text-sm opacity-90">一个人的日常</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-200 rounded-full opacity-20 blur-xl"></div>

            {/* 连接线装饰 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-orange-200">
                <div className="w-2 h-8 bg-gradient-to-b from-gray-400 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部引导文字 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            也许，是时候让
            <span className="text-orange-600 font-medium">"知青晓军"</span>
            陪伴他们，
            <br />
            重新找回那份久违的温暖对话了。
          </p>
        </div>
      </div>
    </section>
  )
}
