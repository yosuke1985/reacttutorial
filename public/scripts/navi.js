
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var activeNumber = 1;

function handleSelect(selectedKey) {
  //ここに書き換えるプログラム
  alert('selected ' + selectedKey);
  activeNumber = selectedKey;
  console.log(activeNumber);
  return activeNumber
}

const navInstance = (
  <Nav bsStyle="tabs" activeKey={handleSelect} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
);

ReactDOM.render(navInstance, document.getElementById('navi'));
