# Hamilton Medical frontend and careers portal

The React/Vite site includes a job application flow at `/career-portal`, a recruiting dashboard at `/admin`, a database-backed Contact us form, and a non-binding support-interest form at `/support-patient-care`. The dashboard and forms use the Laravel API in `backend/`. Applications and uploaded documents are stored in MySQL and private Laravel storage; contact inquiries, support interests, and admin replies are stored in MySQL. Email uses Laravel Mail.

## Run locally

1. Configure `backend/.env` from `backend/.env.example`. The XAMPP socket default is `/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock`. Create the MySQL database and app user in XAMPP/phpMyAdmin, then set `DB_*`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `RECRUITING_EMAIL`, and SMTP values for `MAIL_*`. For example:

   ```sql
   CREATE DATABASE hamilton_careers CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'hamilton_app'@'localhost' IDENTIFIED BY 'use-a-long-unique-password';
   GRANT ALL PRIVILEGES ON hamilton_careers.* TO 'hamilton_app'@'127.0.0.1';
   ```
2. Initialize the backend:

   ```sh
   cd backend
   php artisan key:generate
   php artisan migrate --seed
   php artisan serve
   ```

   Allow 20 MB uploads by setting PHP `upload_max_filesize=22M` and `post_max_size=24M` in the PHP configuration used by both `artisan serve` and production PHP-FPM.

   The seeder creates the admin account from environment values. If the database is already migrated, run `php artisan db:seed --class=AdminUserSeeder` after setting admin credentials.
3. In another terminal, run `npm install` if needed, then `npm run dev`. Vite proxies `/api` to `http://127.0.0.1:8000`.
4. Visit `/career-portal` to apply, `/contact-us` to send an inquiry, `/support-patient-care` to record a non-binding expression of support interest, and `/admin` to manage applications, job listings, inquiries, support interests, and admin accounts.

For production, deploy the `backend/` Laravel application with a persistent MySQL database and private storage (or configure a private S3 disk). Set `FRONTEND_ORIGINS` to the deployed React site origin, configure Laravel `MAIL_*`, `RECRUITING_EMAIL`, and `ADMIN_*`, run `php artisan migrate --seed`, and set `VITE_API_BASE_URL` to the Laravel origin before building the frontend. Replace the requested local `admin@admin.com` / `admin` credentials before deployment. Admin access uses bearer tokens stored only for the browser session; candidate documents are served through authenticated API endpoints.

## Admin workflow

- Review and filter applications, inspect candidate details, and download private CV/supporting files.
- Search and filter live application/contact records, change applicant stage, add internal notes, and review activity and email history.
- Create, edit, and archive job listings; application history is preserved when a job is archived.
- Review website contact inquiries, set their status, and reply by email.
- Superadmins review, search, update, reply to, and delete support-interest records. These records indicate possible future support only; they do not collect money or confirm donations.
- Superadmins create fellow admins/superadmins and enable, disable, change roles, or remove team accounts.

The applicant flow validates documents (PDF, DOC, DOCX, or RTF, up to 20 MB each), saves them privately, records consent and submission data, then sends candidate and recruiter notifications through Laravel Mail. A configured mail transport and reachable database are required for real delivery and persistent submissions.
