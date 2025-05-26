"use client"

import CountUp from "react-countup"

export function StatsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <p className="text-6xl lg:text-7xl font-bold mb-4 text-primary">
              <CountUp end={20} suffix="+" duration={2.5} />
            </p>
            <p className="text-xl text-muted-foreground">anos de experiência</p>
          </div>
          <div className="text-center">
            <p className="text-6xl lg:text-7xl font-bold mb-4 text-primary">
              <CountUp end={1000} suffix="+" duration={2.5} />
            </p>
            <p className="text-xl text-muted-foreground">clientes satisfeitos</p>
          </div>
          <div className="text-center">
            <p className="text-6xl lg:text-7xl font-bold mb-4 text-primary">
              <CountUp end={500} suffix="+" duration={2.5} />
            </p>
            <p className="text-xl text-muted-foreground">veículos em nossa frota</p>
          </div>
        </div>
      </div>
    </section>
  )
}

