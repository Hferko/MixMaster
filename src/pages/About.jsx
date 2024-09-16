import Wrapper from '../assets/wrappers/AboutPage';
import bar from '../assets/images/bar.jpg';
import holo from '../assets/images/holoshuriken.jpg';
import mixer from '../assets/images/mixer.jpg';
import wom from '../assets/images/woman.jpg';

const kepArray = [bar, holo, wom, mixer];

const About = () => {
  return (
    <Wrapper>
      <h1>Rólunk</h1>
      <p>
        Bemutatjuk a „Mix&#127864;Master”-t, a legjobb bulibarát alkalmazást, amely koktélokat tölt le a vidám Cocktails DB API-ból.
        Egy ujjmozdulattal feltárod a varázslatos italreceptek kincsesbányáját, amelyektől ízlelőbimbóid táncra perdülnek, barátaid pedig ugrálnak az örömtől.
        Készülj fel, hogy felrázhasd a mixológiai játékodat, egy-egy fantasztikus koktéllal, és hagyd, hogy folyjon a nevetés és a kuncogás!
      </p>

      {kepArray.map((image, index) => {
        return (
          <div className="gallery" key={image} style={{ float: 'left', padding: 2, margin: 2, border: '2px solid teal' }}>
            <img src={image} alt={index} style={{ width: 300, margin: 'auto', display: 'block' }} />
          </div>
        )
      })}
    </Wrapper>
  );
};
export default About;