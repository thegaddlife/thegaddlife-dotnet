import LogoNav from '../../components/pageNav/logoNav';

export default function Home() {
  return (
    <>
      <LogoNav></LogoNav>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-12">
          <h1 className="text-center text-white font-roc font-bold text-5xl mb-4">Waveform Horizontal</h1>
          <p className="text-center text-white text-xl">This mark is reminiscent of a media wave pattern, while its soft rounded edges imply that our team is approachable and flexible. A very clear WM can be imagined to stretch and bounce back into shape.</p>
        </div>
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/waveform-hr/waveform-horizontal-01-white.svg" alt="waveform logo white" />
            <img src="/img/logos/waveform-hr/waveform-horizontal-02-white.svg" alt="waveform logo white" />
            <img src="/img/logos/waveform-hr/waveform-horizontal-01-color.jpg" alt="waveform logo white" />
            <img src="/img/logos/waveform-hr/waveform-horizontal-02-color.jpg" alt="waveform logo white" />
            <img src="/img/logos/waveform-hr/waveform-horizontal-01-gradient.jpg" alt="waveform logo white" />
            <img src="/img/logos/waveform-hr/waveform-horizontal-02-gradient.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/waveform-hr/waveform-horizontal-01-photo.jpg" alt="waveform logo white" />
            <img src="/img/logos/waveform-hr/waveform-horizontal-phone.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 my-10">
            <img src="/img/logos/waveform-hr/waveform-horizontal-type.jpg" alt="waveform logo white" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
