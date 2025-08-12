--!strict
--since we cannot utilize any external modules and packages. The inital loading screen is kept simple and self contained.
local Players = game:GetService("Players")

local player = Players.LocalPlayer :: Player

local ui = player:FindFirstChild("PlayerGui") :: Instance

local screenGui = Instance.new("ScreenGui")
screenGui.IgnoreGuiInset = true
screenGui.SafeAreaCompatibility = Enum.SafeAreaCompatibility.None
screenGui.ScreenInsets = Enum.ScreenInsets.None
screenGui.ResetOnSpawn = false
screenGui.Parent = ui
screenGui.Name = "HARDCODED_DELETE_ME"

local frame = Instance.new("Frame")
frame.Size = UDim2.fromScale(1, 1)
frame.Parent = screenGui
frame.BackgroundColor3 = Color3.new(0, 0, 0)

local brand = Instance.new("TextLabel")
brand.Size = UDim2.fromScale(1, 1)
brand.Text = "Aetheris"
brand.TextColor3 = Color3.new(1, 1, 1)
brand.BackgroundTransparency = 1
brand.TextScaled = true
brand.Parent = frame
