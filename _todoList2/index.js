const onClick = () => {
    // 텍스트 박스의 Element를 얻는다
  const textEl = document.getElementById("add-text");
    // 텍스트 박스의 값을 얻는다
  const text = textEl.value;
     // 텍스트 박스를 초기화한다(공백)
  textEl.value = "";

    // li 태그 생성
    const li = document.createElement("li");

    // div 태그 생성
    const div = document.createElement("div");
}

// const onClick2 = function() {
//     alert('Button Clicked2');
// }

document.getElementById('add-button')
.addEventListener('click', onClick);