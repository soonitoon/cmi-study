const calendarRefactorData = {
  title: "1주차 과제에 컴포넌트 단위 개발 & 상태관리 적용하기🏗",
  stackBadges: [
    {
      url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      alt: "html",
    },
    {
      url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      alt: "css",
    },
    {
      url: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
      alt: "js",
    },
  ],
  contents: [
    {
      title: '<a href="./assets/calendar_refactor/calendar.html">클릭!</a>',
    },
    {
      title: "요구사항",
      content: [
        "지난주에 만든 캘린더 코드를 <code>컴포넌트</code> 단위로 쪼개서 관리하기(클래스 사용하기).",
        "년, 월, 일 상태를 <code>중앙집중식</code>으로 관리(<code>Redux flow</code> 적용).",
        "<code>옵저버 패턴</code> 적용하기.🔬",
        "위의 사항들을 전부 <code>Vanila JS</code>로만 구현.",
        "(개인) 윤년 판단 코드 만들기.",
        "(개인) <code>CSS 변수</code> 사용하기.",
      ],
    },
    {
      title: "결과물",
      content: [
        "캘린더를 <code>changer</code>, <code>day</code>, <code>date</code> 컴포넌트로 분할해서 관리.",
        "모든 컴포넌트는 <code>Component</code> 클래스를 상속받아 만들어짐.",
        "<code>Store</code> 클래스를 만들어 <code>dispatch()</code> 메소드와 상태 보호 적용.",
        "<code>Store</code> 클래스를 <code>store</code>가 상속받아 <code>reducer()</code>와 <code>action</code> 구현.",
        "<code>Observer.js</code> 파일에 특정 객체를 피관찰자로 만드는 <code>observable()</code> 함수 구현.",
        "상태를 사용하는 함수가 그 상태의 변화를 구독할 수 있게 만들어주는 <code>observe()</code> 함수 구현.",
        "년, 월, 일 상태를 사용하는 컴포넌트의 렌더 함수가 그 상태들을 구독하게 만들어 상태가 바뀌면 리렌더링이 일어나도록 구현.",
      ],
    },
  ],
};

export default calendarRefactorData;
