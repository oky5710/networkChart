# Network chart

### 데이터 갯수에 따른 가변적인 화면 구성
- 좌측에 Account를 클릭하면 데이터 변경
- +. - 버튼을 클릭시 데이터가 가변적으로 변함 - 축소 할수록 하위 메뉴가 보이지 않게 됨.
- drag로 화면 위치 변경가능.

### 기능적 측면
- 노드를 클릭시 강조되어 보이며 한번 더 클릭 시 팝업이 열림(세부 내용 미구현)
- 화면 사이즈에 따라 가변적으로 차트를 그릴 수 있음.

### 기술적 측면
- Zustand를 사용하여 상태를 관리하여 props drilling이 발생하지 않도록 함.
- 사용 기술: Next.js, D3.js, React, CSS Module(성능을 고려)
 
### 성능 측면
- 화면의 위치가 변경되어 보이지 않는 노드는 렌더링 되지 않아 노드가 많더라도 드래그 하면서 사용 가능(개발자 도구에서 노드 개수로 확인 가능)
- 360개 노드, 900개의 링크를 구현: 버퍼링 없이 사용가능.
 