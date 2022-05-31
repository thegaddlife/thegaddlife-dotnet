import LogoNav from '../../components/pageNav/logoNav';

export default function Home() {
  return (
    <>
      <LogoNav></LogoNav>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-12">
          <h1 className="text-center text-white font-roc font-bold text-5xl mb-4">Spring Resilient</h1>
          <p className="text-center text-white text-xl">Resilient, upbeat, and positive. The mark can integrate with other shapes and icons. It can be arranged and connected in ways that are still identifiable as the mark itself while doubling in meaning and style.</p>
        </div>
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/spring/bounce-white.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-enclosed.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-color.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-full.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-icon-laptop.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-icon-phone.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-icon-img.svg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-icon-speaker.svg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/spring/bounce-photo.jpg" alt="waveform logo white" />
            <img src="/img/logos/spring/bounce-phone.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 my-10">
            <img src="/img/logos/spring/spring-type.svg" alt="waveform logo white" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
