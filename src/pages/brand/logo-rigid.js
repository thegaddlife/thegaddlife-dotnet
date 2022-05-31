import LogoNav from '../../components/pageNav/logoNav';

export default function Home() {
  return (
    <>
      <LogoNav></LogoNav>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-12">
          <h1 className="text-center text-white font-roc font-bold text-5xl mb-4">Sharp Continuous</h1>
          <p className="text-center text-white text-xl">A continuous line forms a W and M. This line represents steadiness, consistency, and movement forward toward a goal. It can be adapted to have playful implications of Git branching, among other visual integrations.</p>
        </div>
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/rigid/rigid-white.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-git-white.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-color.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-git-color.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-depth.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-git-depth.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-duo.svg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-git-duo.svg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
            <img src="/img/logos/rigid/rigid-photo.jpg" alt="waveform logo white" />
            <img src="/img/logos/rigid/rigid-phone.jpg" alt="waveform logo white" />
          </div>
          <div className="grid grid-cols-1 my-10">
            <img src="/img/logos/rigid/rigid-type.svg" alt="waveform logo white" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
