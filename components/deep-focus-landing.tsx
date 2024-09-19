import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Clock, Focus, Zap } from "lucide-react"
import Link from "next/link"

export default function DeepFocusLandingComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-lg bg-black/30 fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Focus className="h-8 w-8 text-orange-500" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">deepFocus</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          {["Features", "Pricing", "About", "Download"].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-orange-500 transition-colors" href="#">
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  Unlock Your Productivity with deepFocus
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-400 text-xl md:text-2xl">
                  The ultimate electron app for knowledge workers. Boost your concentration, manage your time, and achieve more.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Download Now
                </Button>
                <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-black text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-24 md:py-32 lg:py-40 bg-black/50 backdrop-blur-lg">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">Why deepFocus?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Brain, title: "Smart Focus Sessions", description: "Optimize your work intervals with AI-powered focus sessions tailored to your productivity patterns." },
                { icon: Clock, title: "Time Management", description: "Track your time effortlessly and gain insights into your productivity trends." },
                { icon: Zap, title: "Distraction Blocker", description: "Eliminate digital noise and stay in the zone with our powerful distraction blocking feature." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center group hover:bg-orange-500/10 p-6 rounded-xl transition-all duration-300">
                  <feature.icon className="h-16 w-16 mb-6 text-orange-500 group-hover:text-orange-400 transition-colors" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
                  Ready to Supercharge Your Productivity?
                </h2>
                <p className="mx-auto max-w-[700px] text-black/80 text-xl md:text-2xl">
                  Join thousands of knowledge workers already using deepFocus to achieve their goals and boost their efficiency.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex space-x-2">
                  <Input className="flex-1 bg-white/90 text-black placeholder-gray-500 rounded-full px-6 py-3 text-lg" placeholder="Enter your email" type="email" />
                  <Button className="bg-black text-orange-500 hover:bg-gray-900 rounded-full px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105" type="submit">
                    Get Early Access
                  </Button>
                </form>
                <p className="text-sm text-black/70">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-orange-800/30 backdrop-blur-lg bg-black/30">
        <p className="text-sm text-gray-400">© 2023 deepFocus Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-6">
          {["Terms of Service", "Privacy Policy"].map((item) => (
            <Link key={item} className="text-sm hover:text-orange-500 transition-colors" href="#">
              {item}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  )
}