import "./Params.css";

const Params = () => {
  return (
    <div>
      <h2>Params</h2>
      <div className="params-form">
        <table>
            <tr>
              <th className="content-auth-label">Key</th>
              <th className="content-auth-label">Value</th>
            </tr>
              <td className="content-auth-label">
                <input type="text" />
              </td>
              <td className="content-auth-label">
                <input type="text" />
              </td>        
        </table>
      </div>
    </div>
  );
};

export default Params;
