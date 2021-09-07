import { useHistory, useParams } from 'react-router-dom';

import LogoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import '../Styles/room.scss';
import deleteImg from '../assets/images/delete.svg'
import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}





export function AdminRoom(){
const params = useParams<RoomParams>();
const roomId = params.id;
const history = useHistory()

const { title, questions } = useRoom(roomId)

async function handleEndRoom(){
    database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
    })
}


async function handleDeleteQuestion(questionId: string){
    if(window.confirm('Você tem certeza que deseja excluir essa pergunta?')){
        const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }

    history.push('/');
}

    return(
       <div id="page-room">
           <header>
               <div className="content">
                   <img src={LogoImg} alt="Letmeask" />
                    <div>
                    <RoomCode code={roomId}/>
                    <Button isOutLined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
               </div>
           </header>
           <main>
        <div className="room-title">
        <h1>Sala {title}</h1>
        {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

       
              <div className="question-list">
              {questions.map(question => {
                   return(
                       <Question
                       key={question.id}
                        content={question.content}
                        author={question.author}
                       >

                    <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                    >
                        <img src={deleteImg} alt="remover pergunta"/>
                    </button>

                       </Question>
                   );
               })}
              </div>
           </main>
       </div>
    );
}