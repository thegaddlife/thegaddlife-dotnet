import LogoNav from '../../components/pageNav/logoNav';

export default function Home() {
  return (
    <>
      <LogoNav></LogoNav>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-12">
          <h1 className="text-center text-white font-roc font-bold text-5xl mb-4">Tangled</h1>
          <p className="text-center text-white text-xl">This mark displays a continuous cyclical connection. A synergy between technology and people (yes I used the corporate babble word synergy).</p>
        </div>
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/tangled/tangled-white.svg" alt="waveform logo white" />
            <img src="/img/logos/tangled/tangled-color.svg" alt="waveform logo white" />
            <img src="/img/logos/tangled/tangled-line.svg" alt="waveform logo white" />
            <img src="/img/logos/tangled/tangled-fade.svg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/tangled/tangled-photo.jpg" alt="waveform logo white" />
            <img src="/img/logos/tangled/tangled-phone.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 my-10">
            <img src="/img/logos/tangled/tangled-type.svg" alt="waveform logo white" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
