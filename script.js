function abrirEnvelope() {
  const envelope = document.getElementById('envelope');
  envelope.style.transform = 'rotateY(180deg)';

  setTimeout(() => {
    const flap = envelope.querySelector('.flap');
    flap.style.transform = 'rotateX(-180deg)';
  }, 1000); // abre a aba depois do flip
}