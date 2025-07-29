import Image from "next/image"
import { Waves, Smartphone, Heart, Sparkles, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FutureVisionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container px-4 md:px-6 mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-200">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">未来愿景</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            让情感，拥有
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">无限可能</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            科技的边界在哪里，情感的延续就能到达哪里。我们正在构建一个全新的情感科技生态。
          </p>
        </div>

        {/* 愿景卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* 卡片一：情感延续 */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* 图标和标题 */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">情感延续，让思念有回响</h3>
                  <p className="text-purple-600 font-medium">逝者声音复刻服务</p>
                </div>
              </div>

              {/* 视觉展示区域 */}
              <div className="relative mb-6 bg-gradient-to-r from-gray-100 to-purple-50 rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center justify-between">
                  {/* 旧照片 */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg bg-white">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=老照片"
                        alt="珍贵的老照片"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover sepia"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* 声波动画 */}
                  <div className="flex-1 mx-6">
                    <div className="flex items-center justify-center gap-1 h-12">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                          style={{
                            width: "3px",
                            height: `${Math.random() * 40 + 10}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2">AI声音复刻中...</p>
                  </div>

                  {/* SoulMy玩偶 */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg bg-white">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=SoulMy"
                        alt="SoulMy AI玩偶"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <Play className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 描述文字 */}
              <p className="text-gray-600 leading-relaxed mb-6">
                未来，您将可以上传亲人生前的语音，我们将通过AI技术，复刻出独一无二的声音、语气甚至口头禅。
                <span className="text-purple-600 font-medium">这不仅是产品，更是一份情感的寄托。</span>
              </p>

              {/* 特性标签 */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  声音克隆
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">情感延续</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  永恒陪伴
                </span>
              </div>

              {/* 行动按钮 */}
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                预约体验
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* 卡片二：IP生态 */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* 图标和标题 */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">IP生态，打破次元壁</h3>
                  <p className="text-blue-600 font-medium">从实体玩偶到虚拟伙伴</p>
                </div>
              </div>

              {/* 视觉展示区域 */}
              <div className="relative mb-6 bg-gradient-to-r from-gray-100 to-blue-50 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-8">
                  {/* 实体玩偶 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg bg-white mb-3 mx-auto">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=实体玩偶"
                        alt="实体SoulMy玩偶"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600">实体陪伴</p>
                  </div>

                  {/* 连接线 */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  </div>

                  {/* 手机屏幕 */}
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-16 h-28 bg-gray-800 rounded-lg p-1">
                        <div className="w-full h-full bg-white rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=104&width=56&text=虚拟伙伴"
                            alt="手机中的虚拟伙伴"
                            width={56}
                            height={104}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">虚拟互动</p>
                  </div>

                  {/* 连接线 */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
                  </div>

                  {/* 未来场景 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-emerald-100 to-cyan-100 mb-3 mx-auto flex items-center justify-center">
                      <div className="text-2xl">🐕</div>
                    </div>
                    <p className="text-xs text-gray-600">宠物沟通</p>
                  </div>
                </div>
              </div>

              {/* 描述文字 */}
              <p className="text-gray-600 leading-relaxed mb-6">
                您的专属伙伴将不再局限于实体，未来可在手机、电脑上随时互动，
                <span className="text-blue-600 font-medium">甚至我们正在探索宠物沟通的可能</span>，
                构建一个全场景的陪伴矩阵。
              </p>

              {/* 特性标签 */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">多端同步</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">全场景覆盖</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  生态扩展
                </span>
              </div>

              {/* 行动按钮 */}
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                了解生态
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* 底部愿景声明 */}
        <div className="text-center mt-16 pt-8 border-t border-purple-200">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              我们的愿景：
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                重新定义情感科技
              </span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              在SoulMy的未来蓝图中，技术不再冰冷，而是情感的载体。我们相信，
              <br />
              每一次技术的突破，都应该让人与人之间的情感连接更加深刻。
            </p>

            {/* 发展阶段 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">2024</span>
                </div>
                <p className="font-medium text-gray-800 mb-1">基础陪伴</p>
                <p className="text-sm text-gray-600">实体AI玩偶上市</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">2025</span>
                </div>
                <p className="font-medium text-gray-800 mb-1">生态扩展</p>
                <p className="text-sm text-gray-600">多端互联互通</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-600 font-bold">2026+</span>
                </div>
                <p className="font-medium text-gray-800 mb-1">情感延续</p>
                <p className="text-sm text-gray-600">声音复刻服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
