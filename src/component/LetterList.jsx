import LetterItem from "./LetterItem.jsx";

function LetterList({ letters }) { 
    return (
        <div style={{ marginTop: "20px" }}>
            {letters && letters.length === 0 && <p>Chua co letter nao</p>}
            {letters && letters.map((letter) => (
                <LetterItem key={letter.id} letter={letter} />
            ))}
        </div>
    );
}

export default LetterList;