import LogoNav from '../../components/pageNav/logoNav';

export default function Home() {
  return (
    <>
      <LogoNav></LogoNav>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/uniform/uniform-notch-white.svg" alt="waveform logo white" />
            <img src="/img/logos/uniform/uniform-notch-color.svg" alt="waveform logo white" />
            <img src="/img/logos/uniform/uniform-notch-stacked-white.svg" alt="waveform logo white" />
            <img src="/img/logos/uniform/uniform-notch-stacked-color.svg" alt="waveform logo white" />
            <img src="/img/logos/uniform/uniform-basic-white.svg" alt="waveform logo white" />
            <img src="/img/logos/uniform/uniform-basic-color.svg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/uniform/uniform-photo.jpg" alt="waveform logo white" />
            <img src="/img/logos/uniform/uniform-phone.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 my-10">
            <img src="/img/logos/uniform/uniform-type.svg" alt="waveform logo white" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
