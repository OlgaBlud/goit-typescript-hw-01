// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
// Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
// Замініть наступний код на версію за допомогою Record
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
