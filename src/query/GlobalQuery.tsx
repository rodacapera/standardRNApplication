import {useQuery} from '@tanstack/react-query';

// const queryClient = useQueryClient();

// Queries
export const GetTodos = () => {
  const todos = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      return {success: 'ok', data: {user: {name: 'rhonald'}}};
    },
  });
  return todos;
};
