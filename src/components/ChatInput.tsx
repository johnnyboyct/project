import { Button, Flex, Form, Input, Select, Space } from "antd";
import React, { useEffect, useRef, useState } from 'react';
import { config } from '../config';
import { UserOutlined } from '@ant-design/icons';
interface ChatInputProps {
	onSendMessage: (message: string, role: string) => void;
	isLoading: boolean;
}

const roles = Object.keys(config.roles).map((role) => ({ label: role, value: role }));
function getRandomPrompt() {
	const categories = Object.keys(config.startingPrompts); // Get categories
	const randomCategory = categories[Math.floor(Math.random() * categories.length)]; // Pick a random category
	const prompts = config.startingPrompts[randomCategory]; // Get prompts in the category
	const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)]; // Pick a random prompt
	return randomPrompt;
}


export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
	const [message, setMessage] = useState('');
	const [role, setRole] = useState('');
	const [subRole, setSubRole] = useState('');
	const [subRoleOptions, setSubRoleOptions] = useState([]);
	const [form] = Form.useForm();
	const inputRef = useRef<any>(null);

	useEffect(() => {
		// Focus the input when component mounts
		inputRef.current?.focus();
		// setRole(roles[0].value);
		// const category = config.roles[roles[0].value];
		const randomIndex = Math.floor(Math.random() * roles.length);
		categorySelection(randomIndex);
		setMessage("Type your message...");
		// setSubRoleOptions(category.map((role) => ({ label: role.role, value: role.role })));
		// setSubRole(category[Math.floor(Math.random() * category.length)].role);
		// setRole(roles[randomIndex].value);
		// getRandomRole();
	}, []);

	const categorySelection = (roleId: number) => {
		const subCategory = config.roles[roles[roleId].value];
		setRole(roles[roleId].value)
		setSubRoleOptions(subCategory.map((role) => ({ label: role.role, value: role.role })));
		setSubRole(subCategory[0].role);
		setMessage(subCategory[0].sample);
		return subCategory;
	}

	const handleSubmit = (e: React.FormEvent) => {
		const roleSelection = config.roles[role].filter((f) => f.role === subRole);
		if (message.trim() && !isLoading) {
			onSendMessage(message, roleSelection[0]);
			setMessage('');
		}
	};

	const handleRoleChange = (value: string) => {
		const category = config.roles[value];
		const subs = category.map((role) => ({ label: role.role, value: role.role, sample: role.sample }));
		setRole(value);
		setSubRoleOptions(subs);
		setSubRole(subs[0].value);
		setMessage(subs[0].sample);
	};

	const handleSubRoleChange = (value: string) => {
		setSubRole(value);
		const roleSelection = config.roles[role].filter((f) => f.role === value);
		setMessage(roleSelection[0].sample);
	};

	return (
		<Form
			form={form}
			// name="control-hooks"
			// style={{ width: '100%' }}
			layout="inline"
			onSubmitCapture={handleSubmit}
			onFinish={handleSubmit}
			// style={{ display: "flex", gap: "0", flexWrap: "wrap" }}
			style={{
				display: "flex",
				// gap: "16px",
				alignItems: "center",
				marginInlineEnd: "1px",
				width: "100%",
			}}
		>
			{/* <Space size="large"> */}
				<Form.Item style={{ flex: 1, width: '100%'  }}>
					<Select
						defaultValue={'Creative'}
						value={role}
						style={{ width: 120 }}
						onChange={handleRoleChange}
						options={roles}
					/>
			</Form.Item>

				<Form.Item style={{ flex: 1 }}>
					<Select
						style={{ width: 120 }}
						value={subRole}
						onChange={handleSubRoleChange}
						options={subRoleOptions}
					/>
				</Form.Item>

				{/* <Select
					style={{ width: 120 }}
					options={config.roleOptions}
					onChange={(value) => setRole(value)}
					// value={role}
					defaultValue='User'
				/> */}
				<Form.Item style={{ flex: 6 }}>
					<Input
						type="text"
						// value={message}
						onChange={(e) => setMessage(e.target.value)}
					placeholder={message}
						prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
						// className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						disabled={isLoading}
						style={{ width: '100%' }}
						ref={inputRef}

					/>
				</Form.Item>

				<Form.Item style={{ flex: 1 }}>
				<Button onSubmit={handleSubmit} onClick={handleSubmit} type="primary" disabled={isLoading || !message.trim()} htmlType="submit" block>
					Ask the {role} {subRole} expert
					</Button>
				</Form.Item>
			{/* </Space> */}
		</Form>

		// </Flex>
	);
}