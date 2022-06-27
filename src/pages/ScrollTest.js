// import React, {useState, useEffect, useRef} from 'react';
// import { AiFillStar } from "react-icons/ai";
// import styled from 'styled-components';
// import { dbService, storageService } from '../firebase';

// const ScrollTest = () => {
//   const targetRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [clicked, setClicked] = useState(null);

//   const [just, setJust] = useState({
//     id:0,
//     day: '',
//     memo: '',
//     star: 0
//   })
//   const [useList, setUseList] = useState({
//     image: '',
//     text: '',
//     page: '',
//     string: true,
//     id: 0
//   });
//   const [copyList, setCopyList] = useState([]);

//   useEffect(() => {
//     setCopyList([{...useList}]);
//   }, [])

//   // const callbackFunction = entries => {
//   //   // 콜백함수를 생성해야함
//   //   // 두개의 인수를 가지는데 entries는 현재 관찰중인 모든 요소의 배열.

//   //   const [entry] = entries; // const entry = entries[0] 과 같다
//   //   setIsVisible(entry.isIntersecting);

//   // }

  

//   const addToList = (idx) => {


//     const gg = {...useList};
//     gg.id = copyList.length;
//     setCopyList(copyList.concat(gg));
//   }

//   const handleChange = (e, id) => {
//     const { value, name } = e.target;

//     const findObj = copyList.findIndex(el => el.id === id);
//     const copy2List = [...copyList];

//     copy2List[findObj] = {...copy2List[findObj], [name]: value,};

//     setCopyList(copy2List);


//     // setOptionValue({
//     //   ...optionValue,
//     //   [name]: value,
//     // })
//   }

//   const trans = (id, string) => {
//     const findObj = copyList.findIndex(el => el.id === id);
//     const copy2List = [...copyList];

//     copy2List[findObj] = {...copy2List[findObj], string: !string};

//     setCopyList(copy2List);
//   }

//   const onFileChange = (e, id) => {
//     const findObj = copyList.findIndex(el => el.id === id);
//     const copy2List = [...copyList];

//     const imgFile = e.target.files[0];

//     const reader = new FileReader(); 
//       reader.onloadend = (finishedEvent) => {
//         const result = finishedEvent.currentTarget.result;
//         copy2List[findObj] = {...copy2List[findObj], image : result};
//         setCopyList(copy2List);
//       }
//       reader.readAsDataURL(imgFile); 
      
//   }

//   const handleChange2 = (e) => {
//     const { value, name } = e.target;
//       setJust({
//       ...just,
//       [name]: value,
//     })
//   }

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const copycopy = [...copyList];
//     try{
//       const please = copycopy.map(async el => {
//         if(el.image !== ''){
//           let attatchmentUrl = null;
//           let loloca = storageService.ref();
//           let nameT = Math.random();
//           let please = await loloca.child(`test/${nameT}`).putString(el.image, 'data_url');
//           attatchmentUrl = await please.ref.getDownloadURL();
//           el.image = attatchmentUrl;
//           return el;
//         } else {
//           return el;
//         }
        
//       });
//       const numFruits = await Promise.all(please);

//       const objobj = {
//         id: just.id,
//         memo: just.memo,
//         day: just.day,
//         excerpt: numFruits
//       }


//       // const gdsz = await imgageUpload(this.imgFile, 'event');
//       await dbService.collection("test").add(objobj);
//       alert('업로드 되었습니다.');
//     } catch(err) {
//       console.log(err);
//     }
//   }

//   return (
//     <Test style={{marginTop: '100px'}}>
//       {/* <HeaderTest>{!isVisible ? 'not in viewport' : 'in viewport'}</HeaderTest>
//       <Gap></Gap>
//       <Tada ref={targetRef}>Tada</Tada> */}

//       {/* {[1,2,3,4,5].map(el => (
//         <div key={el} className={clicked >= el ? 'yellowStar' : ''} onClick={() => setClicked(el)}><AiFillStar /></div>
//       ))} */}

//       <Form onSubmit={onSubmit}>
//         <input type="text" placeholder="any" name="day" onChange={handleChange2} />
//         <textarea name="memo" onChange={handleChange2}></textarea>
//         <div>발췌시작</div>
//         {copyList.map((el, idx) => (
//           <div key={el.id}>
//             <div>{el.string ? <div onClick={() => trans(el.id, el.string)} style={{fontSize: '15px', color: '#333', marginTop: '20px'}}>이미지</div> : <div onClick={() => trans(el.id, el.string)} style={{fontSize: '15px', color: '#333', marginTop: '20px'}}>텍스트</div>}</div>
//             {el.string ? <div><textarea onChange={(e) => handleChange(e, el.id)} name="text" defaultValue={el.text}></textarea></div> : 
            
//             <div><div style={{width: '100px', height: '40px', border: '1px solid #ddd'}}>{el.image !== '' && <img src={el.image} style={{height: '100%'}} alt="" />}</div><input type="file" onChange={(e) => onFileChange(e, el.id)} /></div>}
//             <div className="page"><input type="text" name="page" onChange={(e) => handleChange(e, el.id)} defaultValue={el.page} />p</div>
            
//           </div>
//         ))}
//         <div onClick={addToList}>추가</div>
//         <input type="submit" value="독서 기록하기" />
//       </Form>
//     </Test>
//   )
// }

// export default ScrollTest;

// // const HeaderTest = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100px;
// //   background-color: salmon;
// //   color: white;
// // `;

// // const Gap = styled.div`
// //   height: 100vh;
// //   background-color: #444;
// // `;

// // const Tada = styled.div`
// //   margin: 0 auto;
// //   font-size: 3rem;
// //   text-align: center;
// //   height: 500px;

// // `;

// const Test = styled.div`
// display: flex;
//   div {
//     font-size: 1.5rem;
//     color: #ddd;
//   }

//   .yellowStar {
//     color: #fa0
//   }
// `;

// const Form = styled.form`
//   .page {
//     input {
//       width: 70px;
//     }
//   }
// `;