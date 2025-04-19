
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart as BarChartIcon, LineChart as LineChartIcon, PieChart as PieChartIcon, ArrowUp, ArrowDown, Calendar, Clock, CheckCircle, XCircle, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  // Sample data - in a real app, this would come from your backend
  const weeklyData = [
    { name: "Mon", hours: 1.5 },
    { name: "Tue", hours: 0.5 },
    { name: "Wed", hours: 2 },
    { name: "Thu", hours: 1 },
    { name: "Fri", hours: 0 },
    { name: "Sat", hours: 2.5 },
    { name: "Sun", hours: 0.5 },
  ];

  const monthlyData = [
    { name: "Week 1", hours: 6 },
    { name: "Week 2", hours: 8 },
    { name: "Week 3", hours: 5.5 },
    { name: "Week 4", hours: 8 },
  ];

  const completionData = [
    { name: "Completed", value: 6 },
    { name: "In Progress", value: 3 },
    { name: "Not Started", value: 6 },
  ];

  const COLORS = ["#22c55e", "#f59e0b", "#a1a1aa"];

  const totalHours = weeklyData.reduce((acc, item) => acc + item.hours, 0);
  const lastWeekHours = 7;
  const hoursDifference = totalHours - lastWeekHours;
  const percentageChange = Math.round((hoursDifference / lastWeekHours) * 100);

  const completedItems = 6;
  const totalItems = 15;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);

  const activities = [
    { day: "Today", title: "CSS Basics", type: "Learning", status: "In Progress", time: "2 hours" },
    { day: "Yesterday", title: "HTML Foundations", type: "Course", status: "Completed", time: "3 hours" },
    { day: "Yesterday", title: "Introduction to Web Dev", type: "Article", status: "Completed", time: "30 min" },
    { day: "3 days ago", title: "Portfolio Project Setup", type: "Project", status: "In Progress", time: "1 hour" },
    { day: "4 days ago", title: "Git Basics", type: "Article", status: "Completed", time: "45 min" },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-8 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Your Progress</h1>
          <p className="text-muted-foreground">
            Track your learning journey and stay accountable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Study Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <div className="text-2xl font-bold">{totalHours} hours</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  {percentageChange >= 0 ? (
                    <>
                      <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                      <span className="text-green-500">{Math.abs(percentageChange)}% increase</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                      <span className="text-red-500">{Math.abs(percentageChange)}% decrease</span>
                    </>
                  )}
                  <span className="ml-1">from last week</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <div className="text-2xl font-bold">{completionPercentage}%</div>
                <div className="w-full bg-secondary rounded-full h-2.5 mt-2">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {completedItems} of {totalItems} items completed
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">4 days</div>
                <span className="text-xs text-muted-foreground">Best: 8 days</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Award className="h-3 w-3 text-amber-500" />
                <span>Keep going! You're building a habit.</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="time" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
            <TabsTrigger value="time" className="flex items-center gap-2">
              <BarChartIcon className="h-4 w-4" /> Study Time
            </TabsTrigger>
            <TabsTrigger value="completion" className="flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" /> Completion
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <LineChartIcon className="h-4 w-4" /> Overall
            </TabsTrigger>
          </TabsList>

          <TabsContent value="time">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Study Time Analysis</CardTitle>
                  <div>
                    <Button
                      variant={selectedPeriod === "weekly" ? "default" : "outline"}
                      size="sm"
                      className="mr-2"
                      onClick={() => setSelectedPeriod("weekly")}
                    >
                      Weekly
                    </Button>
                    <Button
                      variant={selectedPeriod === "monthly" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPeriod("monthly")}
                    >
                      Monthly
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Hours spent learning over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={selectedPeriod === "weekly" ? weeklyData : monthlyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="hrs" />
                      <Tooltip
                        formatter={(value) => [`${value} hours`, "Study Time"]}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completion">
            <Card>
              <CardHeader>
                <CardTitle>Task Completion Status</CardTitle>
                <CardDescription>
                  Overview of your learning items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={completionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {completionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} items`, "Count"]}
                        labelFormatter={(label) => `${label}`}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
                <CardDescription>
                  Your progress over the course of your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { week: "Week 1", progress: 10 },
                        { week: "Week 2", progress: 25 },
                        { week: "Week 3", progress: 35 },
                        { week: "Week 4", progress: 40 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis unit="%" />
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Completion"]}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Line
                        type="monotone"
                        dataKey="progress"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <Card key={idx} className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.status === "Completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {activity.status === "Completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{activity.title}</CardTitle>
                        <CardDescription>
                          {activity.type} • {activity.status} • {activity.time}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.day}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline">View All Activity</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Progress;
