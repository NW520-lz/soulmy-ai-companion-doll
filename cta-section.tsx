import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Gift, Clock, Star, Shield, Users, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-15 blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 早鸟标识 */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white rounded-full px-6 py-3 font-bold text-lg shadow-lg animate-bounce">
              <Gift className="w-5 h-5" />
              <span>早鸟计划限时开启</span>
              <Gift className="w-5 h-5" />
            </div>
          </div>

          {/* 主标题 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              加入
              <span className="text-orange-600">"早鸟计划"</span>，
              <br />
              为爸妈锁定第一份温暖
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              每一份支持，都在加速这份特别的礼物来到他们身边。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：礼盒视觉 */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-200">
                {/* 礼盒图片 */}
                <div className="relative mb-6">
                  <Image
                    src="/images/gift-box.jpeg"
                    alt="SoulMy AI陪伴玩偶精美礼盒"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-2xl"
                  />

                  {/* 礼品标签 */}
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg rotate-12">
                    限量
                    <br />
                    礼盒
                  </div>

                  {/* 温暖提示 */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <p className="text-sm text-gray-700 text-center font-medium">"每个礼盒都承载着一份特别的心意"</p>
                  </div>
                </div>

                {/* 礼盒内容展示 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">🎭</span>
                    </div>
                    <span className="text-gray-700 font-medium">知青晓军AI陪伴玩偶 × 1</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">📖</span>
                    </div>
                    <span className="text-gray-700 font-medium">专属使用手册 × 1</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">💝</span>
                    </div>
                    <span className="text-gray-700 font-medium">精美包装礼盒 × 1</span>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-400 rounded-full opacity-40"></div>
            </div>

            {/* 右侧：优惠信息和行动按钮 */}
            <div className="space-y-8">
              {/* 优惠信息卡片 */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-2 font-bold mb-4">
                    <Clock className="w-4 h-4" />
                    <span>限时优惠</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-2xl text-gray-400 line-through">¥1,299</span>
                      <span className="text-4xl font-bold text-orange-600">¥1,039</span>
                    </div>
                    <p className="text-lg font-bold text-red-600">早鸟价8折优惠</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">成为首批荣誉体验官</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">专属定制包装礼盒</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">优先享受新功能更新</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">终身免费技术支持</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                  现在参与预售，您的反馈对我们至关重要。
                  <br />
                  <span className="font-medium text-orange-600">每一份支持，都让这份温暖更快到达。</span>
                </p>

                {/* 主要行动按钮 */}
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mb-4">
                  <Gift className="w-6 h-6 mr-3" />
                  立即预购，传递我的心意
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>

                {/* 次要行动按钮 */}
                <Button
                  variant="outline"
                  className="w-full border-2 border-orange-300 text-orange-700 hover:bg-orange-50 font-medium py-4 rounded-xl transition-all duration-300 bg-transparent"
                >
                  先了解更多详情
                </Button>
              </div>

              {/* 信任保障 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-4 text-center">我们的承诺</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">30天无理由退换</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">全国包邮到家</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">一年质保服务</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">24小时客服支持</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部紧迫感提示 */}
          <div className="text-center mt-16 pt-8 border-t border-orange-200">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 max-w-4xl mx-auto border border-red-200">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-6 h-6 text-red-600 animate-pulse" />
                <span className="text-lg font-bold text-red-700">早鸟计划仅剩</span>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">72小时</div>
              </div>
              <p className="text-gray-600 mb-4">
                已有 <span className="font-bold text-orange-600">2,847</span> 位用户加入早鸟计划
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-orange-400 to-red-400 h-3 rounded-full"
                  style={{ width: "73%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">限量5000份，仅剩27%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
