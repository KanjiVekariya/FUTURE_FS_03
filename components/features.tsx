import { Zap, Shield, Cpu, Wifi } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quantum processors deliver unprecedented speed and efficiency",
    },
    {
      icon: Shield,
      title: "Ultra Secure",
      description: "Advanced biometric security keeps your data protected",
    },
    {
      icon: Cpu,
      title: "AI Powered",
      description: "Machine learning adapts to your usage patterns",
    },
    {
      icon: Wifi,
      title: "Always Connected",
      description: "6G connectivity ensures you're never out of touch",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Nexus</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Every feature is designed to enhance your digital experience and push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
