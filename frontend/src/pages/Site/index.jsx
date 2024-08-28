import { Container } from "./styles";
import video from '../../assets/video2.mp4';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Site = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".video", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".apresentation",
        start: "top: -10px",
        end: "top: -400px",
        scrub: true,
      }
    });

    gsap.to(".text", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".video",
        start: "top: -10px",
        end: "top: -400px",
        scrub: true,
      }
    });

    gsap.to(".share", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".text",
        start: "top: -10px",
        end: "top: -200px",
        scrub: true,
      }
    });

    return () => {
      gsap.killTweensOf('.video');
      gsap.killTweensOf('.text');
      gsap.killTweensOf('.share');
    }
  }, []);

  return (
    <Container>
      <header className="header">
        <div className="logo">
          <h1>Chat.io</h1>
        </div>
        <button className="button-entrar" onClick={() => navigate('/cadastro')}>Entrar</button>
      </header>
      <main>
        <div className="right-direction">
          <section className="apresentation">
            <h1>Chat.io, seu site de conversa!</h1>
          </section>
        </div>
        <div className="left-direction">
           <section className="video">
            <video autoPlay muted loop src={video} alt="" />
          </section>
        </div>
        <div className="right-direction">
          <section className="text">
            <h1>Converse com seus amigos!</h1>
          </section>
        </div>
        <div className="left-direction">
          <section className="share">
            <h1>Compartilhe suas ideias!</h1>
          </section>
        </div>
        <div className="center-direction">
          <div className="teste">
            <h1>Teste agora!</h1>
            <button onClick={() => navigate('/cadastro')}>
              Entrar agora
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Site;