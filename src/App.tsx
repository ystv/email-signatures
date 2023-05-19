import { useState } from 'react'
import './App.css'

const STD_DISCLAIMER = `I'm a student volunteer, so I may send this email at a time that suits me, including early mornings, late nights, or weekends. This doesn't mean I expect a response outside your normal working hours, or that I can always respond immediately.`;

// Can't import from assets, otherwise pulling into gmail would break
const LOGO_URL = `https://ci3.googleusercontent.com/mail-sig/AIorK4w0wrHUSPaXw9CQ8-auXxH4YukjCdOeHqKvG9r0g3c5vrT5BXodg1BemfTsmb2Sntu7ZtELuqo`;

function App() {
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [disclaimer, setDisclaimer] = useState("");

  return (
    <>
    <h1>YSTV Email Signature Generator</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder='John Smith' value={name} onChange={(e) => setName(e.target.value)} /><br />

        <label htmlFor="pronouns">Pronouns (optional)</label>
        <input type="text" id="pronouns" name="pronouns" placeholder='they/them/theirs' value={pronouns} onChange={(e) => setPronouns(e.target.value)} /><br />

        <label htmlFor="position">Position</label>
        <input type="text" id="position" name="position" placeholder='Deputy Technical Director' value={position} onChange={(e) => setPosition(e.target.value)} /><br />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder='john.smith@ystv.co.uk' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

        <label htmlFor="phone">Phone (optional)</label>
        <input type="text" id="phone" name="phone" placeholder='01904 321350' value={phone} onChange={(e) => setPhone(e.target.value)} /><br />

        <label htmlFor="disclaimer">Include disclaimer?</label>
        <select id="disclaimer" name="disclaimer" value={(disclaimer !== "" && disclaimer !== STD_DISCLAIMER) ? "$custom" : disclaimer} onChange={e => setDisclaimer(e.target.value)}>
          <option value="">None</option>
          <option value={STD_DISCLAIMER}>The one Marks uses</option>
          <option value="$custom">Custom</option>
        </select>

        {(disclaimer !== "" && disclaimer !== STD_DISCLAIMER) && (
          <textarea id="custom-disclaimer" name="custom-disclaimer" value={disclaimer} onChange={e => setDisclaimer(e.target.value)} />
        )}
      </div>

      <div style={{ border: "1px solid black", padding: "1em" }}>
        <h2>Preview</h2>
        <p>To apply it:<ol>
          <li>Open Gmail</li>
          <li>Click the cog in the top right, then click "See all settings"</li>
          <li>Scroll down to "Signature", click "Create new"</li>
          <li>Paste the signature in the box</li>
          <li>Ensure it's selected under "Signature defaults" for both new emails and replies</li>
          <li>Click "Save changes" at the very bottom</li>
          </ol></p>
        <hr style={{ margin: "1em 0" }} />
        <div className="signature" style={{
          fontFamily: "arial, sans-serif",
          fontSize: "13px",
          maxWidth: "400px"
        }}>
          <div className="details">
            <strong>{name}</strong>{pronouns !== "" && <em>&nbsp;({pronouns})</em>}<br />
            {position}<br />
            York Student Television (YSTV)<br />
            <a href={"mailto:" + email} style={{ color: "black" }}>{email}</a><br />
            {phone !== "" && <><a href={"tel:" + phone} style={{ color: "black" }}>{phone}</a><br /></>}
            <a href="https://ystv.co.uk" style={{ color: "black" }}>ystv.co.uk</a><br /><br />
            <img src={LOGO_URL} alt="YSTV logo" />
            {disclaimer !== "" && <><br /><em>{disclaimer}</em></>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
