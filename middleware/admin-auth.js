// Получает контекст в котором уже есть..
export default function({store, redirect}) {
    if (!store.getters['auth/isAuthenticated']) {
        redirect('/admin/login?message=pleaseLogin')
    }
}


  