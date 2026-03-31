"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Countdown from "@/components/Countdown"
import DaysTogether from "@/components/DaysTogether"
import PhotoGallery from "@/components/PhotoGallery"
import Message from "@/components/Message"
import FloatingElements from "@/components/FloatingElements"
import TapToReveal from "@/components/TapToReveal"
import MusicPlayer from "@/components/MusicPlayer"

// Change this to your anniversary date
const ANNIVERSARY_DATE = "2025-08-02T12:00:00"
// Change this to the date you got together
const TOGETHER_DATE = "2019-04-01T00:00:00"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showTapToReveal, setShowTapToReveal] = useState(false)
  const [playSong, setPlaySong] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check if the anniversary date has passed
    const now = new Date()
    const anniversary = new Date(ANNIVERSARY_DATE)
    if (now >= anniversary) {
      setShowContent(true)
      setShowTapToReveal(true)
    }
  }, [])

  const handleCountdownComplete = () => {
    setShowContent(true)
    setShowTapToReveal(true)
  }

  const handleReveal = () => {
    setShowTapToReveal(false)
    setShowContent(true)

    // Start music after a delay
    setTimeout(() => {
      setPlaySong(true)
    }, 1000)
  }

  // Add your photos here
  const photos = [
    { src: "/image1.jpg", alt: "Người anh yêu nhất trong 7 năm qua 💑⏱️" },
    { src: "/image2.jpg", alt: "Người sẽ luôn ở cạnh anh và ôm anh khi anh muốn nè" },
    { src: "/image3.jpg", alt: "Người rong ruổi cả Hà Nội cùng anh 💑💞" } ,
    { src: "/image4.jpg", alt: "Người khùm đin với anh" },
    { src: "/image5.jpg", alt: "💖Người mang đến cho anh biết trưởng thành tuyệt vời thế nào 🕰️❤️🤝" },
    { src: "/image6.jpg", alt: "Người đưa anh vào đời" },
    { src: "/image7.jpg", alt: "📸 Người vợ luôn ủng hộ anh 💖" },
  ]

  // Change this message according to you
  const message = `Gửi vợ, người yêu tôi, cô bạn đồng nghiệp Savor.
Để đi cùng nhau suốt một chặng đường dài như hiện tại, yêu nhau chắc chắn không phải là duy nhất. Sự thấu hiểu, thông cảm và quan tâm lẫn nhau qua từng ngày, từng tháng đã vun đắp cho chúng mình một tình yêu mà nhiều người ngưỡng mộ. 
Anh rất yêu em, và rất cảm ơn em vì đã ở cạnh anh, giúp anh trưởng thành hơn, cùng anh trải qua những khoảnh khắc tuyệt vời và đáng nhớ, và đã chịu đựng những khó khăn mà em không xứng đáng phải chịu.
Chúng mình sắp đi đến đoạn kết của một chuyện tình và mở một chương mới là hôn nhân sao? Không, anh vẫn sẽ yêu em như những khúc đoạn đẹp nhất của bọn mình, và chương hôn nhân chính là thành quả mà cả hai bọn mình sẽ cùng nhau hái lấy.
Anh yêu em, và anh sẽ cố gắng để một ngày khi chúng mình đều sẵn sàng, anh sẽ nói với em rằng:

Làm vợ anh nhé.
hf`

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">🌸</div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">🌺</div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient">
                Our Anniversary is Coming!
              </h1>
              <p className="text-xl text-purple-700 font-medium">The countdown to our special day ❤️</p>
            </motion.div>

            <Countdown targetDate={ANNIVERSARY_DATE} onComplete={handleCountdownComplete} />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />
        ) : (
          <>
            <MusicPlayer playSong={playSong} />
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">🎉</div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  Happy Anniversary!
                </h1>
                <p className="text-xl text-purple-700 font-medium">Mỗi khoảnh khắc bên em đều là một rương báu ❤️</p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={message} />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                <p className="text-lg font-medium">Gõ bằng tay và bằng cả ❤️ bởi hf</p>
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
