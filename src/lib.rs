extern "C" {
    pub fn log_number(number: usize);
}

pub fn log(number: usize) {
    unsafe {
        log_number(number);
    }
}
