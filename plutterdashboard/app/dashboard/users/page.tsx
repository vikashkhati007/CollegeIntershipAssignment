import { UserList } from "@/components/dashboard/user/user-list";

export default function UsersPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      </div>
      <UserList />
    </div>
  )
}

