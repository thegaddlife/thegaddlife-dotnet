import LogoNav from '../../components/pageNav/logoNav';

export default function Home() {
  return (
    <>
      <LogoNav></LogoNav>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-12">
          <h1 className="text-center text-white font-roc font-bold text-5xl mb-4">Angle Bracket Lettered</h1>
          <p className="text-center text-white text-xl">Throwback to Macromedia days. Hyper simple shapes with the subtle deconstructed universal symbol for code utilizing the angle brackets and close slash. If you observe the first two shapes you&apos;ll find a &quot;W&quot; while observing the second two shapes reveals an &quot;M&quot; with variants of both.</p>
        </div>
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/angle/angle-white.svg" alt="waveform logo white" />
            <img src="/img/logos/angle/angle-color.svg" alt="waveform logo white" />
            <img src="/img/logos/angle/angle-line.svg" alt="waveform logo white" />
            <img src="/img/logos/angle/angle-block.svg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/angle/angle-photo.jpg" alt="waveform logo white" />
            <img src="/img/logos/angle/angle-phone.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 my-10">
            <img src="/img/logos/angle/angle-type.svg" alt="waveform logo white" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
