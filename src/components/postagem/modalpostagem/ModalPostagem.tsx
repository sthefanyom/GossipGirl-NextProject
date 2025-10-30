import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button
            className='rounded bg-black hover:bg-[#4B0000] text-white border-white border-solid border-2 py-2 px-4'>
            Nova Postagem
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem'
        }}
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
