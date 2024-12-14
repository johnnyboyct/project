import { Button, Flex, Form, Input, Select } from "antd";
import React, { useEffect, useRef, useState } from 'react';
import { config } from '../config';

interface ChatInputProps {
	onSendMessage: (message: string, role: string) => void;
	isLoading: boolean;
}

const roles = Object.keys(config.roles).map((role) => ({ label: role, value: role }));
const subRoles = config.roles;



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
		setRole(roles[0].value);
		const category = config.roles[roles[0].value];
		setSubRoleOptions(category.map((role) => ({ label: role.role, value: role.role })));
		setSubRole(category[0].role);
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		const roleSelection = config.roles[role].filter((f) => f.role === subRole);
		if (message.trim() && !isLoading) {
			onSendMessage(message, roleSelection[0]);
			setMessage('');
		}
	};

	const handleRoleChange = (value: string) => {
		const category = config.roles[value];
		const subs = category.map((role) => ({ label: role.role, value: role.role }));
		setSubRoleOptions(subs);
		setRole(value);
		setSubRole(subs[0].value);
	};

	const handleSubRoleChange = (value: string) => {
		setSubRole(value);
	};

	return (
		// <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
		<Flex justify="center" align="center" style={{ width: '100%' }}>
			<Form
				form={form}
				name="control-hooks"
				style={{ width: '100%' }}
				layout="inline"
				onSubmitCapture={handleSubmit}
				onFinish={handleSubmit}
			>
				<Form.Item>
				<Select
					defaultValue={'Creative'}
					style={{ width: 120 }}
					onChange={handleRoleChange}
					options={roles}
					/>
				</Form.Item>
				<Form.Item>
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
				<Form.Item>
					<Input
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Type your message..."
						className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						disabled={isLoading}
						ref={inputRef}

					/>
				</Form.Item>

				<Form.Item >
					<Button onSubmit={handleSubmit} onClick={handleSubmit} type="primary" disabled={isLoading || !message.trim()} htmlType="submit">Primary Button</Button>
				</Form.Item>

			</Form>
		</Flex>
	);
}