import { useState } from 'react';
import { createPortal } from 'react-dom';

type MyFormProps = {
  myTitle: string;
  myPost: string;
  handleChangeT: (value: string) => void;
  handleChangeP: (value: string) => void;
};

type PostButtonProps = {
  setPosts: React.Dispatch<
    React.SetStateAction<{ title: string; content: string }[]>
  >;
};


function MyForm({ myTitle, myPost, handleChangeT, handleChangeP }: MyFormProps) {

  return (
    <form>
      <div>
        <label>Title:
          <textarea
            className='Title'
            value={myTitle}
            onChange={(e) => handleChangeT(e.target.value)}
          />
        </label>
      </div>

      <label>Content:
        <textarea
          className='Content'
          value={myPost}
          onChange={(e) => handleChangeP(e.target.value)}
        />
      </label>
    </form>
  );
}

interface postButtonProps{
    isOpen: boolean,
    onClose: any,
    children: any
}

function Modal({ isOpen, children, onClose }: postButtonProps) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Post</button>
      </div>
    </div>,
    document.body
  );
}

export default function PostButton({setPosts}: PostButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [myTitle, setMyTitle] = useState("");

  const [myPost, setMyPost] = useState("");

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Post</button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);

          setPosts(prev => [
            ...prev,
            { title: myTitle, content: myPost }
          ]);
          console.log(myTitle, myPost);
          setMyTitle("");
          setMyPost("");
        }}
      >
        <MyForm
          myTitle={myTitle}
          myPost={myPost}
          handleChangeT={setMyTitle}
          handleChangeP={setMyPost}
        />
      </Modal>
    </div>
  );
}


