import { JoinHeader, JoinMain, JoinContainer, Button, Select } from "./styles"

export function Home() {
    return (
        <JoinContainer>
			<JoinHeader>
				<h1><i className="fas fa-smile"></i> ChatCord</h1>
			</JoinHeader>
			<JoinMain>
				<form>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
						/>
					</div>
					<div className="form-control">
						<label htmlFor="room">Room</label>
						<Select name="room" id="room">
							<option value="JavaScript">JavaScript</option>
							<option value="Python">Python</option>
							<option value="PHP">PHP</option>
							<option value="C#">C#</option>
							<option value="Ruby">Ruby</option>
							<option value="Java">Java</option>
						</Select>
					</div>
					<Button type="submit" className="btn">Join Chat</Button>
				</form>
			</JoinMain>
		</JoinContainer>
    )
}
