import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Heart, Users, Star, Sparkles } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* 左侧文字内容 */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block animate-bounce">
                <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full border border-orange-200 shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  SoulMy AI陪伴玩偶
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight animate-fade-in-up">
                爸妈，有位
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 animate-pulse">"老朋友"</span>
                <br />
                替我陪您聊聊天
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-[600px] leading-relaxed">
                专为50-70年代长辈精心设计的AI陪伴玩偶。
                <br />
                <span className="font-medium text-gray-800">怀旧情怀 × AI智能陪伴</span>，
                让"知青晓军"陪伴您度过温暖时光，
                <br />
                分享那些年的美好回忆。
              </p>
            </div>

            {/* 特色亮点 */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 border border-orange-100 hover:bg-white/70 transition-all duration-300">
                <Heart className="w-4 h-4 text-orange-500" />
                <span>怀旧年代记忆</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 border border-orange-100 hover:bg-white/70 transition-all duration-300">
                <Users className="w-4 h-4 text-orange-500" />
                <span>24小时陪伴聊天</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 border border-orange-100 hover:bg-white/70 transition-all duration-300">
                <Star className="w-4 h-4 text-orange-500" />
                <span>专为长辈设计</span>
              </div>
            </div>

            {/* 行动号召按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                了解更多
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-200 text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-orange-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                观看视频
              </Button>
            </div>

            {/* 信任标识 */}
            <div className="pt-6 border-t border-orange-100">
              <p className="text-sm text-gray-500 mb-3">已有超过10,000个家庭选择SoulMy</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">
                    ⭐
                  </div>
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9分用户评价</span>
              </div>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="慈祥的奶奶与知青晓军AI玩偶在温暖的客厅里"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />

              {/* 装饰性元素 */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">正在陪伴中</span>
                </div>
              </div>

              {/* 对话气泡装饰 */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg max-w-[200px]">
                <p className="text-sm text-gray-700 font-medium">"奶奶，还记得当年我们一起下乡的日子吗？"</p>
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/95 rotate-45"></div>
              </div>
            </div>

            {/* 背景装饰 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
