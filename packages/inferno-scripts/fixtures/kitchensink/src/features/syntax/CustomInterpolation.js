import Inferno from 'inferno';
import Component from 'inferno-component';

const styled = ([style]) => style.trim()
  .split(/\s*;\s*/)
  .map(rule => rule.split(/\s*:\s*/))
  .reduce((rules, rule) => ({ ...rules, [rule[0]]: rule[1] }), {});

function load() {
  return [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' }
  ];
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load();
    this.setState({ users });
  }

  render() {
    const veryInlineStyle = styled`
      background: palevioletred;
      color: papayawhip;
    `;

    return (
      <div id="feature-custom-interpolation">
        {this.state.users.map(user => (
          <div key={user.id} style={veryInlineStyle}>{user.name}</div>
        ))}
      </div>
    );
  }
}
